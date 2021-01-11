OUTPUT_DIR=resume/output
CV_DIR=static/cv

all: cv site

deploy: cv
	git checkout master
	npm run generate
	git add dist
	git commit -m "makefile: site autogeneration"
	git subtree push --prefix dist origin gh-pages

site:
	npm run generate

cv:
	$(MAKE) -C resume
	mkdir -p $(CV_DIR)
	mv $(OUTPUT_DIR)/resume.pdf $(CV_DIR)
	mv $(OUTPUT_DIR)/resume.html $(CV_DIR)
