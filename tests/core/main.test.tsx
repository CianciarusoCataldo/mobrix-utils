import PKG from "../../package.json";

import computeValueTests from "../test-suites/computeValue";
import fillObjectTests from "../test-suites/fillObject";

describe(`\n        ## ${PKG.name} v${PKG.version} - unit tests ##        \n`, () => {
  computeValueTests();
  fillObjectTests();
});
