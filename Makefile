HOTWEB_VER=v0.0.4
deps:
	@type hotweb &> /dev/null || ( curl -Lo /usr/local/bin/hotweb https://github.com/lalyos/hotweb/releases/download/$(HOTWEB_VER)/hotweb-$(shell uname); chmod +x /usr/local/bin/hotweb)

dev:
	HOTWEB_DEBUG=1 hotweb