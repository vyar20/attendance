const { getDefaultConfig } = require('expo/metro-config')
const { withNativeWind } = require('nativewind/metro')
const path = require('path')

const workspaceRoot = path.resolve(__dirname, '../../')
const projectRoot = path.resolve(__dirname)

const config = getDefaultConfig(projectRoot)

config.watchFolders = [workspaceRoot]

config.resolver.nodeModulesPaths = [
  path.resolve(workspaceRoot, 'node_modules'),
  path.resolve(projectRoot, 'node_modules')
]

module.exports = withNativeWind(config, {
  input: path.resolve(workspaceRoot, 'packages/twconfig/global.css')
})
