<script>
export default {
    name: "Contacts",
    data() {
        return {
            contacts: [
                {
                    description: "Corporate Location 1600 Amphithatre Parkway London WC1 1BA",
                    iconClasses: ["fa-solid", "fa-globe"]
                },
                {
                    description: "Residential Location 9521 Broadsberry Avenue Paddington RC7 9ZA",
                    iconClasses: ["fa-solid", "fa-house-chimney"]
                },
                {
                    description: "1.800.458.556 / 1.800.532.2112",
                    iconClasses: ["fa-solid", "fa-phone-flip"]
                },
                {
                    description: "info@your-domain.com",
                    iconClasses: ["fa-regular", "fa-envelope"]
                },
                {
                    description: "Monday - Friday: 9:00 AM - 6:00 PM",
                    iconClasses: ["fa-regular", "fa-clock"]
                },
                {
                    description: "Saturday - Sunday: 9:00 AM - 12:00 PM",
                    iconClasses: ["fa-regular", "fa-clock"]
                },
            ],
        };
    },
};
</script>

<template>
    <div class="contacts">
        <ul>
            <li v-for="(contact, index) in contacts" :key="index">
                <i :class="contact.iconClasses"></i>
                <p>{{ contact.description }}</p>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;

.contacts {
    color: $dove-gray;
    li {
        display: flex;
        i {
            padding: .25rem .5rem;
        }
    }
}
</style>