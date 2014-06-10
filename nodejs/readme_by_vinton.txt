Making code changes
Install the Git client for your operating system, and from your command line run

git clone ssh://539726fb5973ca67820007d5@nodejs-vinton.rhcloud.com/~/git/nodejs.git/
cd nodejs/
This will create a folder with the source code of your application. After making a change, add, commit, and push your changes.

git add .
git commit -m 'My changes'
git push
When you push changes the OpenShift server will report back its status on deploying your code. The server will run any of your configured deploy hooks and then restart the application.