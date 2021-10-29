export default function auth({ next, router }) {
    if (!this.isLoggedIn || this.getUser == null || this.getUserToken == null) {
        return router.push({ name: "Login" });
    }

    return next();
}