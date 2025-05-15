import dynamic from "next/dynamic";

export default dynamic(() => import("./ModelViewerNoSSR"), {
    ssr: false
});
