const { SlashCommandBuilder, EmbedBuilder, Embed, SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder,ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: {
        name: `crimson_reaper`
    },
    async execute(interaction,message, client){
        const embed = new EmbedBuilder()
        .setTitle(`크림슨 리퍼`)
        .setColor(0x18e1ee)
        .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxNzA4MDJfMTQy/MDAxNTAxNjIzMzU2ODg4.ln5M6l3kQPVLtIPj0LfLHtcZw48UYJSx0gb7wXfv4Vwg.8juyJk8JusA8n9nR_E3U0r-m23GuZRr-AQQbVJRQo0Mg.JPEG.lbu_diablo/%ED%81%AC%EB%A6%BC%EC%8A%A8%EB%A6%AC%ED%8D%BC.jpg?type=w740')
        .addFields([
            {
                name: `조합법`,
                value: `\n\n혈혼검 테페시아 \n 스톰 리버 \n 작은 분노의 조각 \n 심연의 기운 \n 암흑의 결정 \n 불로의 심장`,
                inline: true
            }
        ]);
        const button = new ButtonBuilder()
        .setCustomId('cosmic_reaper')
        .setLabel(`코즈믹 리퍼`)
        .setStyle(ButtonStyle.Primary);
        const button1 = new ButtonBuilder()
        .setCustomId('caedis')
        .setLabel(`학살의 검 카에디스`)
        .setStyle(ButtonStyle.Primary);
        await interaction.update({
            embeds: [embed],
            components: [new ActionRowBuilder().addComponents(button,button1)],
            ephemeral: true
            
        });
    }
}