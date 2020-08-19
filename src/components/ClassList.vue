<template>
    <div class="students container">
        <h2 class="subtitle is-3">
            See the student CVs below
        </h2>
        <div class="columns is-multiline">
            <div class="column is-one-quarter">
                <StudentCard />
            </div>
            <div class="column is-one-quarter">
                <StudentCard />
            </div>
        </div>
    </div>
</template>
<script>
    import StudentCard from '@/components/StudentCard';
    export default {
        name: 'StudentList',
        components : {
            StudentCard
        }
    }
</script>
<style scoped>
    .events {
        margin-top: 100px;
        text-align: center;
    }
</style>