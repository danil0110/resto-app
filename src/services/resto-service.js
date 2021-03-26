export default class RestoService {
    async getMenuItems() {
        return await fetch('http://localhost:3000/menu')
            .then(res => res.json());
    }
}