OS : Windows

## Important Notes:

1. Snowpack is a tool that is used to speed up development process of an application. Snowpack is a specifically a frontend development tool. Hence, there is not direct integration between backend (Django) with Snowpack. Also Django runs on different port and snowpack runs on different port.
2. Snowpack is used to run Vue.js and bundle JS, CSS, SCSS and other files. By default Vue.js can be install using VueCLI but here we are using Snowpack to do the same thing.
3. Django : http://172.0.0.1:8082
4. Snowpack (Vue.js) : http://127.0.0.1:8083
5. As Django runs on different port and Snowpack (Vue.js) runs on different port, we integrate them by calling Snowpack URL from Django App. This is possible because of snowpack mount configuration. (/static, /src, etc...)


## Steps: 
Note: These are not detailed steps, just an overview of steps.

**Step 1**: Create a python virtual environment
E.g. create it in `D:\MFB Project` folder

**Step 2**: Install Django, you can follow any youtube video, but follow the folder structure as mentioned in the project, as resources are referenced by the specific folder structure in the project. Example, https://www.youtube.com/watch?v=MmxVlwm6fN0

**Step 3**: migrate models in django database. Djanog uses models.py to create new data in database. And if you edit models.py you need to propogate the changes to the database.

`python manage.py makemigrations`

`python manage.py migrate`

**Step 4**: Install https://github.com/snowpackjs/snowpack/tree/main/create-snowpack-app/app-template-vue you can follow any youtube tutorial for it. Example, https://www.youtube.com/watch?v=6i7oMANRfMs

**Step 5**: You show have django running on port 8082 and snowpack (Vue.js) running on port 8083

`cd "MFB Project\MFB"`

`"D:\MFB Project\Scripts\activate.bat"`

`python manage.py runserver 0.0.0.0:8002`

**Step 6**: Create a new terminal on VS Code and run snowpack (Vue.js), you need to use snowpack.config.mjs then only snowpack will run on port 8083

`npm run start`

![2.PNG]

**Step 7**: In this way we integreate Django "Ok doke" with Vue app (src/App.vue)

