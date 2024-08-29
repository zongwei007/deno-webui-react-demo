import lume from "lume/mod.ts";
import esbuild from "lume/plugins/esbuild.ts";
import sourceMaps from "lume/plugins/source_maps.ts";

const site = lume({
  src: "./src",
  dest: "./public",
});

site.copy("styles.css");

site.use(esbuild({ extensions: [".ts", ".tsx"] }));

site.use(sourceMaps());

export default site;
