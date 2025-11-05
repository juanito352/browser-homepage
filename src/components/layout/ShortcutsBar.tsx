import { shortcuts } from "../../util/shortcuts";
import ShortcutBox from "../reusable/ShortcutBox";

export default function ShortcutsBar() {
    return (
        <div className="flex justify-center items-center flex-wrap gap-8 mt-6 mb-86">
            {shortcuts.map((shortcut, idx) => (
                <ShortcutBox shortcut={shortcut} key={idx} />
            ))}
        </div>
    );
}
