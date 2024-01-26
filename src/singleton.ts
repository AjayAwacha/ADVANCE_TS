class SingletonExample {

    private static instance: SingletonExample;

    private constructor() { 
    }

    static getObject() {
        if (!this.instance) {
            this.instance = new SingletonExample();
        }
        return this.instance;
    }
}