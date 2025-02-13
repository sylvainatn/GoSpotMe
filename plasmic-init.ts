import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "tExnNbUcHKP2pStJddWbTg",  // ID of a project you are using
      token: "wFCGISe4G6eGfyEhzE5ZRULlZHDe49Cb6osAAXcbK0tmQn8eihdiATZSycdjo13zUwGc2vdgX78O7HkLvBhg"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})