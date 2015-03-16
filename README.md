#Testem RequireJS Skeleton

The purpose of this project is to provide a skeleton and examples for using
Testem with RequireJS. It also provides an alternative to including testing
libraries under a RequireJS environment.

##Using this project

To use this, grab the `runner.mustache` and testem.json file and include them
in your project. Fill in the values in testem.json that are applicable to the
project.

##Installing and seeing in action

To see this project in action, do the following:

    git clone git@github.com:geoffberger/testem-require-skeleton.js.git
    cd testem-require-skeleton
    npm install

Now that the dependencies have been installed, run the following example:

    npm run testem-mocha-expect

More actual tests will be written at a later point in time. Also, more testing
libraries will be incorporated for this proof of concept.

##Configuration

Here are all the properties that can be used alongside the skeleton:

    {
      "framework": "",

      "framework_file": "",

      "test_page": "runner.mustache",

      "test_libs": [
      ],

      "requirejs": "",

      "require_config": "",

      "require_configs": ,

      "src_files": [
      ],

      "src_files_ignore": [
      ]
    }

You can find further elaboration on each item below.

###Framework

The `framework` property is the same as used by Testem. This is used to locate
the framework within Testem. If for some reason this doesn't align, you can
alternatively use `framework_file` and `framework` will be ignored. However,
including `framework` could provide the user with some context, so it could be
preferred to not leave it blank.

###Test page

The core of this comes from the test_page, which should always be the same
throughout each project. This is where the variables from the skeleton are
referenced.

###Testing libraries

Since testing related libraries and helpers will be used throughout, it didn't
make much sense to require them to be included on every test file. Therefore,
they are loaded before require but after the testing framework and the Testem
JS. The `test_libs` come in the form of an Array and preserve order.

###RequireJS source
Since each project will point to a different location of RequireJS, fill in the
destination of the library through the `requirejs` property.

###RequireJS Configuration

The RequireJS configuration comes in two different forms: `require_config` and
`require_configs`. `require_config` takes in a string, while `require_configs`
takes in an array. When it takes in a string, it will add a data-main attribute
to the script loading RequireJS. When it takes in an Array, it will be loaded
after the fact. You would use an array in case you want to include a main
require config, alongside a test require config for overrides or additional
properties.

###Adding source and test files

Just like in a regular Testem config, add any source and test files under
`src_files` will be included through a `require` call. Think of this as the way
the files are actually ran. The file paths must be relative like a typical
Testem config.

###Ingoring source files

This operates the same way as in Testem. Add anything in `src_files_ignore`
that should be ignored within `src_files`. The file paths must be relative like
a typical Testem config.
