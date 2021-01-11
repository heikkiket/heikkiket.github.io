OUTPUT_DIR=resume/output
CV_DIR=static/cv

all: cv site

deploy: cv
	npm run deploy

site:
	npm run generate

cv:
	$(MAKE) -C resume
	mkdir -p $(CV_DIR)
	mv $(OUTPUT_DIR)/resume.pdf $(CV_DIR)
	mv $(OUTPUT_DIR)/resume.html $(CV_DIR)
