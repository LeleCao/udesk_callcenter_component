var doc = document;

class Alert {
    createElement() {
        var id = 'udesk-callcenter-component-alert';
        var element = this.element = doc.getElementById(id);
        var body = doc.body;

        if (!element) {
            element = this.element = doc.createElement('div');
            element.id = id;

            body.appendChild(element);
        }
    }

    success(text) {
        this.createElement();
        this.element.innerText = text;
        this.element.style.backgroundColor = 'green';
        this.show();
    }

    error(text) {
        this.createElement();
        this.element.innerText = text;
        this.element.style.backgroundColor = 'red';
        this.show();
    }

    destroy() {
        if (this.element && this.element.parentNode) {
            this.element.parentNode.removeChild(this.element);
        }
    }

    show() {
        this.element.style.display = 'block';
        clearTimeout(this.timeoutId);
        this.timeoutId = setTimeout(() => {
            this.element && (this.element.style.display = 'none');
        }, 5000);
    }
}

export default new Alert();
