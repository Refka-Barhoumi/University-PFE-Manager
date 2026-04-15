package com.example.backend.entity;

import lombok.Data;

@Data
public class ProjectResponse {
    private Long id;
    private String title;
    private String description;
    private String objectives;
    private String technologies;
    private String participationType;
    private String projectContext;
    private String companyName;
    private String companySupervisor;
    private String status;
    private StudentInfo student;
    private StudentInfo student2;

    @Data
    public static class StudentInfo {
        private Long id;
        private String fullName;
        private String email;
    }

    // Convertir Project en ProjectResponse
    public static ProjectResponse from(Project project) {
        ProjectResponse response = new ProjectResponse();
        response.setId(project.getId());
        response.setTitle(project.getTitle());
        response.setDescription(project.getDescription());
        response.setObjectives(project.getObjectives());
        response.setTechnologies(project.getTechnologies());
        response.setParticipationType(project.getParticipationType());
        response.setProjectContext(project.getProjectContext());
        response.setCompanyName(project.getCompanyName());
        response.setCompanySupervisor(project.getCompanySupervisor());
        response.setStatus(project.getStatus());

        if (project.getStudent() != null) {
            StudentInfo s = new StudentInfo();
            s.setId(project.getStudent().getId());
            s.setFullName(project.getStudent().getFullName());
            s.setEmail(project.getStudent().getEmail());
            response.setStudent(s);
        }

        if (project.getStudent2() != null) {
            StudentInfo s2 = new StudentInfo();
            s2.setId(project.getStudent2().getId());
            s2.setFullName(project.getStudent2().getFullName());
            s2.setEmail(project.getStudent2().getEmail());
            response.setStudent2(s2);
        }

        return response;
    }
}