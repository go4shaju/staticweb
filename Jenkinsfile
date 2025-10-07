pipeline {
  agent any
  options { timestamps() }
  environment {
    SITE_DIR   = 'site'          // path to your React app (contains package.json)
    BUILD_DIR  = 'build'         // CRA output folder
    DEPLOY_DIR = '/var/www/site' // shared with Nginx (same volume/path)
    CI         = 'true'          // prod-style build for CRA
  }
  stages {
    stage('Checkout') {
      steps { checkout scm }
    }

    stage('Validate') {
      steps {
        sh(script: '''
          set -euo pipefail
          echo "No linters configured yet; skipping."
        ''', shell: '/bin/bash')
      }
    }

    stage('Build React') {
      steps {
        sh(script: '''
          set -euo pipefail

          # Ensure the React app exists
          test -f "${SITE_DIR}/package.json" || {
            echo "ERROR: ${SITE_DIR}/package.json not found. Set SITE_DIR to your React app path." >&2
            exit 1
          }

          # Show node/npm versions (must be preinstalled on the agent)
          node -v
          npm -v

          cd "${SITE_DIR}"

          # Deterministic install if lockfile exists
          if [ -f package-lock.json ]; then
            npm ci
          else
            npm install
          fi

          # Build production assets (outputs to ./build)
          npm run build

          # Move artifacts to the top-level ${BUILD_DIR}
          rm -rf "${WORKSPACE}/${BUILD_DIR}"
          mkdir -p "${WORKSPACE}/${BUILD_DIR}"
          cp -a "build/." "${WORKSPACE}/${BUILD_DIR}/"

          # Sanity check
          test -f "${WORKSPACE}/${BUILD_DIR}/index.html"
        ''', shell: '/bin/bash')
      }
    }

    stage('Package') {
      steps {
        // The build artifacts are already in ${BUILD_DIR}; just archive them
        archiveArtifacts artifacts: "${BUILD_DIR}/**", fingerprint: true
      }
    }

    stage('Deploy to Nginx') {
      steps {
        sh(script: '''
          set -euo pipefail
          : "${BUILD_DIR:?}"; : "${DEPLOY_DIR:?}"

          mkdir -p "${DEPLOY_DIR}"
          # Keep target clean and copy dotfiles too
          rsync -a --delete "${BUILD_DIR}/" "${DEPLOY_DIR}/"

          # Final check
          test -f "${DEPLOY_DIR}/index.html"
        ''', shell: '/bin/bash')
      }
    }
  }
  post {
    success {
      echo 'Deployed. Open http://localhost:8081'
    }
  }
}
