<template>
    <span class="skillTag">
        <slot />
    </span>
</template>

<script>
</script>

<style lang="scss" scoped>
.skillTag{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background: #eee;
    padding: 4px 8px;
    font-size: 14px;
    &::before{
        color: #BB42F6;
        content: "#";
        font-weight: 700;
        margin-right: 3px;
    }
}
</style>