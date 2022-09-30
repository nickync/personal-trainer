package com.red.trainer.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.red.trainer.model.Trainer;
import com.red.trainer.repository.TrainerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.Objects;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/")
public class TrainerController {
    @Autowired
    private TrainerRepository trainerRepository;

    @GetMapping("/all")
    public List<Trainer> getAllTrainers(){
        return trainerRepository.findAll();
    }

    @RequestMapping(path = "/search/{first}/{last}", method = RequestMethod.GET)
    public Trainer getTrainerByName(@PathVariable("first") String first, @PathVariable("last") String last){
        return trainerRepository.findByFirstNameAndLastName(first, last);
    }

    @RequestMapping(path = "/search/{name}", method = RequestMethod.GET)
    public List<Trainer> getTrainerByPartialName(@PathVariable("name") String name){
        return trainerRepository.findByFirstNameOrLastName(name, name);
    }

    @PostMapping(path = "/add")
    public void addTrainer(@RequestPart(value = "file", required = false) MultipartFile multipartFile, @RequestPart(value = "trainer") String trainerData) throws IOException {

        ObjectMapper objectMapper = new ObjectMapper();
        Trainer trainer = objectMapper.readValue(trainerData, Trainer.class);

        trainerRepository.save(trainer);

        if (!(multipartFile == null)){
            String fileName = StringUtils.cleanPath(Objects.requireNonNull(multipartFile.getOriginalFilename()));

            String uploadDir = "photos/" + trainer.getId();

            Path uploadPath = Paths.get(uploadDir);
            if (!Files.exists(uploadPath)){
                Files.createDirectories(uploadPath);
            }

            try (InputStream inputStream = multipartFile.getInputStream()){
                Path filePath = uploadPath.resolve(fileName);
                Files.copy(inputStream, filePath, StandardCopyOption.REPLACE_EXISTING);
            } catch (IOException error){
                throw new IOException("Could not save the file!");
            }
        }

    }
}
