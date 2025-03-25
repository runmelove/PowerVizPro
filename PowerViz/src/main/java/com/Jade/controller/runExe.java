package com.Jade.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

/**
 * @author lovemelater
 * @version 1.0
 * @since 2025/3/24 - 03 - 24 - 17:08
 */

@RestController
public class runExe {
    private static final Logger logger = LoggerFactory.getLogger(runExe.class);

    @GetMapping("/runExe")
    public String runExe() {
        try {
            String exePath = "\"D:\\develop_typing\\C++\\MFC\\StuManageSys\\system_exe\\StuManageSys.exe\"";
            // 执行指定路径的 .exe 文件
            Process process = Runtime.getRuntime().exec(exePath);

            // 创建一个 BufferedReader 对象，用于读取 .exe 文件执行后的输出信息
            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
            // 创建一个 StringBuilder 对象，用于存储读取的输出信息
            StringBuilder output = new StringBuilder();
            String line;
            // 逐行读取输出信息，并添加到 StringBuilder 中
            while ((line = reader.readLine()) != null) {
                output.append(line).append("\n");
            }

            // 等待 .exe 文件执行完成，并获取其退出码
            int exitCode = process.waitFor();
            if (exitCode == 0) {
                // 正常退出
                logger.info("执行成功");
                return "执行成功";
            } else if (exitCode == 2) {
                logger.info("手动退出");
                return "手动退出，退出码: 2";
            } else {
                logger.info("异常退出");
                return "执行失败，未知退出码: " + exitCode;
            }
        } catch (IOException | InterruptedException e) {
            return "发生错误: " + e.getMessage();
        }
    }
}

