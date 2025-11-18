import styled from 'styled-components'

export const PlayerWrapper = styled.div`
	min-height: 560px;
	background: #f7f7f7;
	padding: 48px 0;

	.content {
		display: flex;
		gap: 36px;
		padding: 32px;
		background: #fff;
		border-radius: 12px;
		box-shadow: 0 12px 32px rgba(0, 0, 0, 0.04);
	}

	.cover img {
		width: 220px;
		height: 220px;
		border-radius: 12px;
		object-fit: cover;
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
	}

	.info {
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	.title {
		font-size: 28px;
		font-weight: 600;
		margin-bottom: 8px;
		color: #222;
	}

	.meta {
		color: #666;
		margin-bottom: 4px;
	}

	.description {
		margin-top: 12px;
		color: #444;
	}
`

export const LyricList = styled.ul`
	margin-top: 24px;
	flex: 1;
	max-height: 360px;
	overflow-y: auto;
	padding-right: 12px;

	&::-webkit-scrollbar {
		width: 6px;
	}

	&::-webkit-scrollbar-thumb {
		border-radius: 3px;
		background-color: rgba(0, 0, 0, 0.15);
	}

	.lyric-line {
		padding: 6px 0;
		color: #666;
		transition: color 0.2s ease;
		line-height: 1.5;
	}

	.lyric-line.active {
		color: #c20c0c;
		font-weight: 600;
	}

	.lyric-line.empty {
		color: #999;
	}
`
