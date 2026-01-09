const { getDefaultConfig } = require('expo/metro-config')
const { withNativeWind } = require('nativewind/metro')
const path = require('path')

const projectRoot = path.resolve(__dirname)
const workspaceRoot = path.resolve(projectRoot, '../../')

const config = getDefaultConfig(__dirname)

config.watchFolders = [workspaceRoot]

config.resolver.nodeModulesPaths = [
  path.resolve(workspaceRoot, 'node_modules'),
  path.resolve(projectRoot, 'node_modules')
]

module.exports = withNativeWind(config, {
  input: '../../packages/twconfig/global.css'
})
