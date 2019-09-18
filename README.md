# Dashboard Tasks

MD COLLABS, MaxDev Collaboration & Sharing Tool is a simple management task module; a plugin runs on Processwire CMF Framework.

https://modules.processwire.com/modules/process-dashboard-tasks/

This module allows you to track interactions in your team through your Email application; furthermore, you can collaborate and share your task instantly from the web site.

This module modified from Kongondo Dashboard Notes at https://processwire.com/talk/topic/20980-dashboard-notes/

## Install

1. Place the module files in /site/modules/DashboardTasks/
2. In your admin, click Modules > Check for new modules
3. There are two modules, the main module is DashboardTasks, and the other one DashboardDocs is an optional module in case you want the users to attach files to their task.
4. Install DashboardDocs to use both modules, or install DashboardTasks only without the document attachment.

## User Roles

There are three roles for this module, task-user (co-worker), task-owner (task creator) and task-manager.

## Demo Users

The installer created five demo users, task-manager, task-owner and three task-coworkers. For the first time log-in user, before using the module, a task manager role required to configure the Global Settings.

user name: task-manager, password: task-manager, email: task-manager@yourdomainname

user name: task-owner password: task-owner, email: task-owner@yourdomainname

user name: task-coworker1 password: task-coworker1, email: task-coworker1@yourdomainname

user name: task-coworker2 password: task-coworker2, email: task-coworker2@yourdomainname

user name: task-coworker3 password: task-coworker3, email: task-coworker3@yourdomainname

Change those emails with your test emails.

## Task Types

There are three types available for the new task creation. First, is the Notes type. Use this type if you want to share your notes or collaborate the ideas to your members.

The second type is the core of this module, a Task Scheduler type with start date and due date of the task. If you click the Required Job Acceptance from your task settings, then this task type will become an enquiry or job offer task type.

The third type is the Reports or Private Notes type. Use this type for your private record or might be you share it to the selected members in your team.

## Usage Scenario

You can use this module for numerous tasks management purposes, from just a shared idea up to enquiry request type.

Email or SMS is the primary interface for the user in this module. The user can decide either respond to that email request and log in to the system or just read it in their mailbox.

If there is no action required from the recipient, then it is not compulsory to log in to the system as well. Responses to the submitted task also will be sent out to the task creator email as well.

For example, your company use a Call Centre service to capture your customer's enquiries, where the messages will be sent out to your contractors or service providers.

In this case, your role here is the Task Manager, the call centre agent's role become the Task Owner, someone who created the task and your contractors or service providers are the Task Users.

Once a contractor received the request and accepted the enquiry's offer, this contractor assigned as the job provider for that task.

The other scenario usage, for example, you're a property manager who will process your tenant request for fault enquiry to your tradesperson group. Or, a lecturer who wants to arrange a research group with some students.. the list goes on ...

## CSS

CSS Grid doesn't work in some old browsers. You need to adjust the CSS under Less folder if you want to use this module for old browsers. <details> tag is not working in IE or Edge browser.

## SMS

If you want the output sent to SMS and Email, you have to add your SMS Provider API to the ProcessDashboardTasks.module. And add your mobile users' array to the SaveTask and SaveTaskReply function.
