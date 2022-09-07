from django.urls import path

from . import views

urlpatterns = [
    path('jobs', views.getAllJobs, name='jobs'),
    path('jobs/new', views.newJob, name='new_job'),
    path('jobs/<str:pk>', views.getJob, name='job'),
    path('jobs/<str:pk>/apply', views.applyToJob, name='apply_to_job'),
    path('jobs/<str:pk>/check', views.isApplied, name='is_applied_to_job'),
    path('jobs/<str:pk>/update', views.updateJob, name='update_job'),
    path('jobs/<str:pk>/delete', views.deleteJob, name='delete_job'),
<<<<<<< HEAD

    path(
        'job/<str:pk>/candidates',
=======
    path(
        'jobs/<str:pk>/candidates',
>>>>>>> f780aaf (chore: Separated frontend and backend in branchs)
        views.getCandidatesApplied,
        name='get_candidates_applied'
    ),

<<<<<<< HEAD
    path('stats/<str:topic>', views.getTopicStats, name='get_topic_stats'),

=======
>>>>>>> f780aaf (chore: Separated frontend and backend in branchs)
    path(
        'me/jobs/applied',
        views.getCurrentUserAppliedJobs,
        name='current_user_applied_jobs'
    ),
    path('me/jobs', views.getCurrentUserJobs, name='current_user_jobs'),
<<<<<<< HEAD
=======

    path('stats/<str:topic>', views.getTopicStats, name='get_topic_stats'),
>>>>>>> f780aaf (chore: Separated frontend and backend in branchs)
]
