const testContext = require.context(ROOT_DIR, true, /\.spec\.ts/);

// And load the modules.
function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

requireAll(testContext);
