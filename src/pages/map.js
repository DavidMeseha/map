import dynamic from "next/dynamic";

const Map = dynamic(() => import("../Map"), { ssr: false })

const map = () => {
    return (
        <Map />
    )
};

export default map;