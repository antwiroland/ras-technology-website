# Ghana Multi-Tenant SaaS POS Platform

## Project Overview
This project is a **cloud-based, multi-tenant SaaS POS platform** built for the Ghanaian retail market. It combines an **offline-first JavaFX desktop POS** with a **web-based admin dashboard**, backed by a secure, scalable Spring Boot backend.

## Problem Statement
- Unreliable internet connectivity disrupting POS operations
- Manual or weakly controlled sales processes
- Mobile Money fraud and fake payment alerts
- Poor inventory control across multiple branches
- Limited visibility into staff activity and fraud

## Solution
The platform delivers a **Ghana-optimized retail operating system** that:
- Works fully offline and syncs safely when internet returns
- Supports multi-branch businesses under one subscription
- Enforces role-based permissions and approvals
- Handles Ghana-specific payment flows (Cash + MoMo)
- Prevents fraud through audit logs and approval controls

## Core Platform Architecture
- **POS Client:** JavaFX Desktop (offline-first)
- **Admin Portal:** Web Dashboard (Next.js)
- **Backend:** Spring Boot (multi-tenant)
- **Database:** PostgreSQL (tenant isolation)
- **Sync:** Event-based with idempotency keys

## Key Modules
- Tenant onboarding & subscriptions
- Branch & staff management
- Product & pricing management
- Inventory & stock control
- Sales & checkout with offline support
- MoMo fraud control & reconciliation
- Reporting & analytics
- SaaS administration
