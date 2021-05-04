import SetUpSection from "./SetUpSection";
import DiskSection from "./DiskSection";
import SyncSection from "./SyncSection";
import SampleSection from "./SampleSection";

export default function ControlPanel() {

    return <section className="control-panel space-between">
        <SetUpSection />
        <DiskSection />
        <SyncSection />
        <SampleSection />
    </section>;

}