const { SlashCommandBuilder, EmbedBuilder, Embed, SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder,ButtonBuilder, ButtonStyle } = require('discord.js');


module.exports = {
    data: {
        name: `meacronacer`
    },
    async execute(interaction,message, client){
        const embed = new EmbedBuilder()
        .setTitle(`천영의 환검 미크로네이서`)
        .setColor(12370112)
        .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxNzA4MDJfNDYg/MDAxNTAxNjIzMzAwOTE5.f6Yl1NsFV9cUc74I6khSGqRfxmCtnv9K8L4NwkmslJMg.V1xbLO4oLI3VpW3aNbPLq3NTTMKf4zwRzFxcREVZ5bMg.PNG.lbu_diablo/%EC%B2%9C%EC%98%81%EC%9D%98%ED%99%98%EA%B2%80%EB%AF%B8%ED%81%AC%EB%A1%9C%EB%84%A4%EC%9D%B4%EC%84%9C.png?type=w740')
        .addFields([
            {
                name: `조합법`,
                value: `\n\n진 환검 바하나르 \n 한기의 조각 \n 대자연의 정수 \n 악몽의 기운 \n 순수의 강철 \n 아다만티움`,
                inline: true
            }
        ]);
        
        const button = new ButtonBuilder()
        .setCustomId('astra_sword_of_moonlight')
        .setLabel(`월광의 검 아스트라`)
        .setStyle(ButtonStyle.Primary);
        await interaction.update({
            embeds: [embed],
            components: [new ActionRowBuilder().addComponents(button)],
            ephemeral: true
            
        });



    }
}