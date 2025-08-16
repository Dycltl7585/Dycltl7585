import * as core from "@actions/core";
async function run() {
    try {
        core.info("主逻辑开始执行...");
        // 模拟一个需要清理的操作，比如设置环境变量
        core.exportVariable("MY_TMP_FILE", "/tmp/my-action-file.txt");
        core.info("已设置临时文件路径: /tmp/my-action-file.txt");
    }
    catch (error) {
        core.setFailed(error.message);
    }
}
run();
//# sourceMappingURL=main.js.map
