# INSTALL ######################################################################

VENDOR_DIR := ./node_modules
INSTALLED_FLAG := $(VENDOR_DIR)/.installed

.PHONY: install
install: $(INSTALLED_FLAG)
$(INSTALLED_FLAG): package-lock.json Makefile
	npm i
	@ touch $(INSTALLED_FLAG)  # indicate that dependencies are installed

.PHONY: update
update: install
	npm update
	@ touch $(INSTALLED_FLAG)  # indicate that dependencies are installed

# BUILD ########################################################################

.PHONY: build
build: install
	npm run build

# RUN ##########################################################################

.PHONY: run
run: install
	npm start

.PHONY: launch
launch: build
	eval "sleep 5; open http://localhost:8080" & make run

# CLEAN ########################################################################

.PHONY: clean
clean:
	rm -rf $(VENDOR_DIR)
	rm -rf public/js
	rm -rf public/styles
