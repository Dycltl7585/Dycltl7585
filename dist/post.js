import * as core from "@actions/core";
import * as fs from "fs";
async function cleanup() {
    try {
        core.info("开始执行 post 清理逻辑...");
        const tmpFile = process.env.MY_TMP_FILE;
        if (tmpFile && fs.existsSync(tmpFile)) {
            fs.unlinkSync(tmpFile);
            core.info(`已删除临时文件: ${tmpFile}`);
        }
        else {
            core.info("没有找到需要清理的临时文件");
        }
    }
    catch (error) {
        core.setFailed(error.message);
    }
}
cleanup();
//# sourceMappingURL=post.js.map
