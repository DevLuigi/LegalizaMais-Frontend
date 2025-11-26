import Menu from '@components/menu';
import Footer from '@components/footer';

import { Container, Content, GroupPath, Path } from './styled.js';

export default function ViewMain(props) {

  return (
    <Container>
      <Menu />
      <Content>
        {props.path && (
            <GroupPath>
              <Path root="true"> {props.path[0]} </Path>
              <Path root="true"> {">"} </Path>
              <Path> {props.path[1]} </Path>
            </GroupPath>
          )
        }
        <main>
          {props.children}
        </main>
        <Footer />
      </Content>
    </Container>
  );
}