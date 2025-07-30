# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AdaptEd is a mobile and web-based educational application designed for children aged 4-8 who have Individualized Education Programs (IEPs). The app uses AI to deliver personalized, interactive learning experiences aligned with each child's specific IEP goals across core educational domains including reading, math, writing, shapes, speech, and social skills.

## Project Structure

This is currently a requirements and planning phase project. The main content is organized in the `requirements/` directory:

- `AdaptEd.md` - Core feature overview and specifications
- `AdaptEd_PRD.md` - Detailed Product Requirements Document
- `Bevell HLE v1.xlsx - Feature Listing.csv` - Development estimates and feature breakdown
- `Bevell notes 30May25.md` - Development notes and requirements
- `AdaptEd HLE_otter_ai.txt` - Additional requirements and transcripts
- Various PDF research papers on special education and serious games

## Key Product Features

### Core User Types
- **Parent Users**: Primary account holders who manage child profiles and track progress
- **Child Users**: Ages 4-8 with IEPs, the end users of learning activities
- **Administrators**: Platform management and content curation

### Primary Features
- **IEP Integration**: Upload PDF IEPs or manual entry with AI parsing for goals and accommodations
- **Smart Matching System**: Tag-based algorithm matching child profiles to appropriate activities
- **Interactive Learning Modules**: Games and lessons across 6 domains (reading, math, writing, shapes, speech, social skills)
- **Progress Tracking**: Comprehensive reporting for parents and alignment with IEP goals
- **Subscription Management**: In-app subscription handling with Stripe integration

### Technical Architecture Considerations
- **Authentication**: Email/password and Google sign-in with Stripe payment integration
- **AI Components**: Content personalization, IEP parsing, activity matching, and adaptive difficulty
- **Multi-platform**: Mobile and web-based application
- **Accessibility**: Must comply with accessibility standards for special needs users

## Development Phases

Based on the feature listing, the project is estimated at 260 total development hours including:
- Pre-dev phase (72 hours): Local setup, server setup, requirements, solution design, database development
- Login/registration/Profile (40 hours): Parent registration, payment, child profiles, IEP upload, matching
- Dashboard (20 hours): Landing page, navigation, mascot interactions
- Additional features for learning modules, progress tracking, and administrative functions

## Key Considerations

- **Special Education Focus**: All features must be designed with accessibility and special needs considerations
- **Research-Backed**: Implementation should align with evidence-based special education practices
- **Parent Empowerment**: Interface design should support non-technical parents managing their child's education
- **Data Privacy**: Handle sensitive IEP and child data with appropriate security measures
- **Engagement**: Game-based learning with appropriate difficulty scaling and positive reinforcement

## Current Status

This project is in the planning and requirements phase. No codebase has been developed yet, so this document serves as a foundation for future development work.
EOF < /dev/null