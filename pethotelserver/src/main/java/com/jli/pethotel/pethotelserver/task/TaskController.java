package com.jli.pethotel.pethotelserver.task;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/task")
public class TaskController {

    TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping
    public List<Task> findTaskByPet(@RequestParam String petId) {
        return taskService.findTasksByPet(petId);
    }

    @PutMapping(path = "{id}/done")
    public Task updateDone(@PathVariable String id, @RequestParam String value) {
        return taskService.updateDone(id, value);
    }

    @PostMapping
    public List<Task> saveTasks(@RequestBody List<Task> tasks) {
        return taskService.saveTasks(tasks);
    }
}

