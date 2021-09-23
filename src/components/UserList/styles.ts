import styled from 'styled-components'

export const Container = styled.div`
  grid-area: UL;

  display: flex;
  flex-direction: column;
  background-color: var(--secondary);
  padding: 3px 6px 0 16px;
  max-height: cal(100vh - 46px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 11px;
    height: 16px;
  }

  ::-webkit-scrollbar-corner {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border: 4px solid transparent;
    background-clip: padding-box;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-track {
    border: 4px solid transparent;
    background-clip: padding-box;
    border-radius: 8px;
    background-color: #2e3338;
  }
`

export const Role = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: var(--gray);
  margin-top: 20px;
  text-transform: uppercase;
`

export const User = styled.div`
  margin-top: 5px;
  padding: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 4px;
  background: transparent;
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  > strong {
    margin-left: 13px;
    font-weight: 500;
    color: var(--white);
    opacity: 0.7;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  > span {
    margin-left: 9px;
    background-color: var(--discord);
    color: var(--white);
    border-radius: 4px;
    padding: 3px 5px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 10px;
  }
`

export const Avatar = styled.div`
  flex-shrink: 0;
  background-color: var(--primary);
  width: 32px;
  height: 32px;
  border-radius: 50%;

  &.bot {
    background-color: var(--mention-detail);
  }
`
