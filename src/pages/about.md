---
layout: ../layouts/AboutLayout.astro
title: "About"
---

# About Me

Hi, I'm Lucy (Xinlu) Zhang, a software developer based in Adelaide, South Australia. I completed a Master of Information Technology at Flinders University in July 2026 with a GPA of 6.5/7.0. I have full-time work rights in Australia, am available immediately, and am happy to relocate anywhere in Australia for the right opportunity.

I focus on backend and full-stack development, with hands-on experience in Java, Spring Boot, Spring Security, REST APIs, PostgreSQL, MySQL, React, TypeScript, Docker, automated testing, CI/CD, and cloud deployment.

Before moving into software, I completed a Master of Laws and a Bachelor of Arts in Japanese. That background shapes how I build software: I care about precise rules, clear permission boundaries, and evidence that a system behaves as intended. It is also why I built CaseFlow Ops, a secure legal matter workflow backend where access depends on both a user's role and their relationship to each case.

My recent work includes CaseFlow Ops and StitchFlow, a deployed multilingual craft workflow platform with account-based cloud persistence. Through these and earlier team projects, I have built practical experience in API design, relational data modelling, role- and relationship-based authorisation, transactional workflows, automated testing, CI/CD, and cloud deployment.

## Technical Focus

- Backend development with Java and Spring Boot
- Authentication and authorisation with Spring Security and JWT
- REST API design, validation, and testing
- PostgreSQL / MySQL and relational database design
- Full-stack development with React and TypeScript
- Unit, web-security, and database integration testing with JUnit 5 and MockMvc
- Cloud deployment with Docker, Render, Vercel, Cloudflare, and AWS
- AI-assisted development with Claude Code and Codex, used inside a test-driven workflow where I review and verify every generated change

## How I Work

- **Verify before shipping.** On one team project I designed 60 JUnit 5 tests and found three logic defects that casual testing had missed, including an incomplete `equals`/`hashCode` implementation that silently overwrote records.
- **Record the trade-offs.** In CaseFlow Ops I document significant design choices as architecture decision records, including why each protected request reloads the user from the database.
- **Clarify requirements early.** As a backend developer in an 11-person multinational Agile team, I worked directly with the PM and business analysts to pin down business rules before building APIs.

## Selected Projects

### CaseFlow Ops

An in-progress legal matter workflow backend built with Java 21, Spring Boot, Spring Security, PostgreSQL, and Flyway. It implements JWT authentication, role- and case-level authorisation, transactional Draft case creation, staff assignments, and client creation, backed by 37 automated tests and CI quality gates. A paginated client directory, case status transitions, and the React frontend are in progress.

### StitchFlow

A deployed React and TypeScript workflow platform for knitting and crochet projects, started during OpenAI Build Week 2026. It combines structured pattern modelling, automatic stitch-count checks, multilingual terminology support, Supabase authentication with row-level security, private image storage, cross-device persistence, accessibility controls, and print-to-PDF output.

### Surfboard Rental Management System

A full-stack board rental platform. I built the Spring Boot REST API with a layered architecture, JPQL date-overlap checks to prevent double bookings, validation, and centralised exception handling, then deployed the Dockerised backend on Render and the React frontend on Vercel.

## Experience

- **Information Technology Intern**, Lianyungang Ruikefei Engineering Consulting (Jun – Sep 2024): built a Python tool to clean and standardise Excel-exported project data, maintained user access in internal project-management systems, and provided first-line IT support.
- **Grocery Team Member (Casual)**, Coles Group, Adelaide (Jul 2025 – present): customer service and stock replenishment in a fast-paced retail environment while studying full-time.
- **Legal Intern**, Dentons Nanjing Office (Nov 2021 – Jan 2022): legal research, meeting minutes, and contract proofreading for corporate restructuring and labour matters.

## Education and Credentials

- **Master of Information Technology**, Flinders University (2024 – 2026), GPA 6.5/7.0. High Distinctions in Computer Programming, Data Engineering, Cloud and Distributed Computing, Software Testing and Quality Assurance, Fundamentals of Artificial Intelligence, and more.
- **Master of Laws**, Nanjing Normal University (2020 – 2023)
- **Bachelor of Arts in Japanese**, Soochow University (2015 – 2019), including a year-long exchange at Waseda University
- **AWS Certified Cloud Practitioner** (2025)
- **Flinders University Chancellor's Letter of Commendation** (2025)

## Languages

- Mandarin Chinese (native)
- English (professional working proficiency, IELTS 7.0)
- Japanese (advanced, JLPT N1)

## Career Direction

I am open to software developer opportunities across backend, full-stack, cloud, and general software engineering teams, and I am particularly interested in legal-tech, compliance, and international products where my legal and language background adds value.

I enjoy building practical, secure systems that solve real user problems, and I want to keep strengthening my engineering judgement through production-minded work.

## Outside of Work

I knit and crochet, often from English, Japanese, and Chinese patterns. Keeping track of where I stopped across inconsistent notation is what led me to build StitchFlow.
