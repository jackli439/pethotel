package com.jli.pethotel.pethotelserver.task;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class TaskService {

    TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public Task findTaskById(String id) {
        return taskRepository.findById(Long.parseLong(id)).orElseThrow(
                () -> {
                    return new ResponseStatusException(HttpStatus.NOT_FOUND, String.format("Task with id %s not found", id));
                }
        );
    }

    public List<Task> findTasksByPet(String id) {
        return taskRepository.findAllByPetId(Long.parseLong(id));
    }

    public Task updateDone(String id, String value) {
        Task task = findTaskById(id);
        task.setDone(Boolean.parseBoolean(value));
        return taskRepository.save(task);
    }

    public List<Task> saveTasks(List<Task> tasks) {
        return taskRepository.saveAll(tasks);
    }
}
