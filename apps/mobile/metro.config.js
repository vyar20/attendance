const { getDefaultConfig } = require('expo/metro-config')
const { withNativeWind } = require('nativewind/metro')
const path = require('node:path')

const workspacePath = path.resolve(__dirname, '../..')
const projectPath = path.resolve(__dirname)

const config = getDefaultConfig(projectPath)

config.watchFolders = [workspacePath]

config.resolver.nodeModulesPaths = [
  path.resolve(projectPath, 'node_modules'),
  path.resolve(workspacePath, 'node_modules')
]

module.exports = withNativeWind(config, {
  input: path.resolve(workspacePath, 'packages/twconfig/global.css')
})
