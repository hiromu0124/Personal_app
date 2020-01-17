json.user_name @answer.user.name
json.created_at @answer.created_at.strftime("%Y-%m-%d %H:%M")
json.text markdown(@answer.text).html_safe