package com.example.FinalSpringProject.service;

import com.example.FinalSpringProject.entity.Training;
import com.example.FinalSpringProject.repository.TrainingRepository;
import com.fasterxml.jackson.databind.JsonNode;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
@RequiredArgsConstructor
public class TrainingService {

    private final TrainingRepository trainingRepository;
    private final RestTemplate restTemplate = new RestTemplate();

    public void fetchAndSaveTrainings() {
        String url = "https://www.work24.go.kr/cm/openApi/call/hr/callOpenApiSvcInfo310L01.do?authKey=a073a0f3-d0b4-4e02-8261-4dea9a942542&returnType=JSON&outType=1&pageNum=1&pageSize=20&srchTraArea1=41&srchNcs1=20&srchTraStDt=20241231&srchTraEndDt=20251231&sort=ASC&sortCol=2";

        ResponseEntity<JsonNode> response = restTemplate.getForEntity(url, JsonNode.class);
        JsonNode dataArray = response.getBody().get("returnData");

        System.out.println("=== 전체 응답 ===");
        System.out.println(response.getBody());

        if (dataArray == null) {
            System.out.println("⚠️ data 항목이 존재하지 않거나 null입니다.");
        } else {
            System.out.println("📦 data 항목의 길이: " + dataArray.size());

            for (JsonNode item : dataArray) {
                System.out.println("→ 제목: " + item.get("title")); // title이 null이면 확인됨
            }
        }


        if (dataArray != null && dataArray.isArray()) {
            for (JsonNode item : dataArray) {
                Training training = new Training();
                training.setTitle(item.get("title").asText(""));
                training.setTelNo(item.get("telNo").asText(""));
                training.setAddress(item.get("address").asText(""));
                training.setSubTitle(item.get("subTitle").asText(""));

                trainingRepository.save(training);
            }
        }
    }
}
