const { SlashCommandBuilder, EmbedBuilder, Embed, SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder,ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: {
        name: `caedis`
    },
    async execute(interaction,message, client){
        const embed = new EmbedBuilder()
        .setTitle(`학살의 검 카에디스`)
        .setColor(0x18e1ee)
        .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMjAxMTZfMjA3/MDAxNjQyMjkyNjU3OTE2.PO0kolZmuXoQ49unWwmctie2WsHG2uC7Z_pDDYhK-KMg.WCinGRoheI2jZ8csSsSlkfZSHnqgcULD4k49BLuoiOcg.JPEG/Item_Melee011.jpg?type=w740')
        .addFields([
            {
                name: `조합법`,
                value: `\n\n크림슨 리퍼 \n 하늘의 족쇄 \n 폭풍의 가호 \n 화염의 가호 \n 바다의 가호 \n 영혼의 파편 \n 피의 결정`,
                inline: true
            }
        ]);
        const button = new ButtonBuilder()
        .setCustomId('crimson_reaper')
        .setLabel(`크림슨 리퍼`)
        .setStyle(ButtonStyle.Secondary);
        await interaction.update({
            embeds: [embed],
            components: [new ActionRowBuilder().addComponents(button)],
            ephemeral: true
            
        });
    }
}