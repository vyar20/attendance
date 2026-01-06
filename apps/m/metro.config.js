const { getDefaultConfig } = require('expo/metro-config')
const { withNativeWind } = require('nativewind/metro')
const path = require('path')

const projectRoot = __dirname
const workSpaceRoot = path.resolve(projectRoot, '../../')
const config = getDefaultConfig(projectRoot)

config.watchFolders = [workSpaceRoot]

config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workSpaceRoot, 'node_modules')
]

module.exports = withNativeWind(config, {
  input: path.resolve(workSpaceRoot, 'packages/twconfig/global.css')
})
