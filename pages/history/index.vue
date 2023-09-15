<template>
    <div class="l-container l-history">
        <div class="child">
        <h1 class="childMainVisual__title">history</h1>
        <Timeline
            :timeline-items="items"
            :message-when-no-items="messageWhenNoItems"
            color-dots="#BB42F6"
            order="asc"
          />
        </div>
        </div>
    </template>
  
  <script>
  import { client }  from '../../libs/client.js'

  export default {
    async asyncData () {
        try {
            const [history] = await Promise.all([
            client.get({ endpoint: 'history'})
            ])
            return {
                history,
                items: history.contents.map(history =>{
                    return({
                        from: new Date(history.date),
                        title: history.company,
                        description: `<p class="timeline-text">${history.text}</p><ul class="skillCards">${history.skill.map(skill => `<li><span class="skillTag">${skill}</span></li>`).join('')}</ul>`
                    })
                })
            }
        } catch (error) {
        console.error(error)// eslint-disable-line no-console
        return { history: ["none"] }
        }
    },
    data () {
      return {
        messageWhenNoItems: 'データが存在しません',
      }
     }
  }
  </script>
  <style lang="scss">
  .l-history{
    .timeline{
        max-width: 1000px;
    }
    .timeline .wrapper-item{
        grid-template-columns: 80px 1fr;
    }
    .timeline-item .title-item{
        font-weight: bold;
        margin-bottom: 0.4em;
    }
    .timeline-text{
        margin-bottom: 0.6em;
    }
  }

  </style>