task :start do
  exec 'heroku local -f Procfile.dev'
end