import styled from 'styled-components'
export const Container = styled.div`
  background-color: ${({ theme }) => theme.colorprimary};
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
`

export const Button = styled.button.attrs((): any => ({
  className: 'button',
}))`
  color: #fff;
  &:hover {
    color: #fff;
  }
`

export const Field = styled.div.attrs((): any => ({
  className: 'field',
}))``

export const Control = styled.div.attrs((): any => ({
  className: 'control',
}))``

export const Section = styled.section`
  padding: 3.5rem 0;
  @media (min-width: 960px) .site-section {
    padding-top: 5.5rem;
    padding-bottom: 5.5rem;
  }
`

type Types = {
  primary?: boolean
}
export const H1 = styled.h1`
  font-size: 2rem;
  line-height: 3rem;
  font-weight: 900;
  letter-spacing: 0.09rem;
  text-transform: uppercase;
  color: ${(props: Types) =>
    props.primary ? ({ theme }) => theme.colorprimary : '#444'};
  &.heading--with-divider:after {
    content: '—';
    display: block;
  }
  @media (max-width: 960px) {
    text-align: center;
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 700;
  }
`
H1.defaultProps = {
  primary: false,
}

export const H2 = styled.section`
  padding: 3.5rem 0;
  @media (min-width: 960px) {
    padding-top: 5.5rem;
    padding-bottom: 5.5rem;
    font-weight: 700;
  }
`

export const H3 = styled.section`
  padding: 3.5rem 0;
  @media (min-width: 960px) .site-section {
    padding-top: 5.5rem;
    padding-bottom: 5.5rem;
  }
`

export const H4 = styled.section`
  padding: 3.5rem 0;
  @media (min-width: 960px) .site-section {
    padding-top: 5.5rem;
    padding-bottom: 5.5rem;
  }
`

export const H5 = styled.section`
  padding: 3.5rem 0;
  @media (min-width: 960px) .site-section {
    padding-top: 5.5rem;
    padding-bottom: 5.5rem;
  }
`

export const Text = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin: 0 0 1.6rem;
  @media (max-width: 960px) {
    text-align: justify;
  }
`
export const Avatar = styled.figure.attrs((): any => ({
  className: 'image',
}))`
  border-radius: 100%;
  overflow: hidden;
`
