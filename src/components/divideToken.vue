<script>
export default {
    methods: {
        divideToken(token) {
            const [header, payload, signature] = token.split('.');
            const extractedPayload = JSON.parse(atob(payload));
            const {id} = extractedPayload;
            return id;
        }
    }
}
</script>