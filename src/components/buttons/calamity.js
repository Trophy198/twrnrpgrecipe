const { SlashCommandBuilder, EmbedBuilder, Embed, SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder,ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: {
        name: `calamity`
    },
    async execute(interaction,message, client){
        const embed = new EmbedBuilder()
        .setTitle(`캘러미티`)
        .setColor(0x18e1ee)
        .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMDA2MjdfMjA2/MDAxNTkzMjIzODE0Njgz.NjsrGax2kIb9NewjQ6SJf1HhpVEm-rqd7TU6WORl0-gg.W7eFTHaG1bZUi_Qimv_YNAxe1TkTuyADYHW6xPSeITMg.JPEG/BTNCalamity.jpg?type=w740')
        .addFields([
            {
                name: `조합법`,
                value: `\n\n루인브링어 \n 디 엔더 \n 한기의 조각 \n 폭풍의 결정 \n 화염의 결정 \n 바다의 결정 \n 지옥의 파편`,
                inline: true
            }
        ]);
        const button = new ButtonBuilder()
        .setCustomId('ruinbringer')
        .setLabel(`루인브링어`)
        .setStyle(ButtonStyle.Secondary);
        const button1 = new ButtonBuilder()
        .setCustomId('d_ender_b')
        .setLabel(`디 엔더`)
        .setStyle(ButtonStyle.Secondary);
        await interaction.update({
            embeds: [embed],
            components: [new ActionRowBuilder().addComponents(button,button1)],
            ephemeral: true
            
        });
    }
}