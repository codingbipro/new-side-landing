"use client"

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Hader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Hire', href: '#hire' },
  ];

  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center">
              {/* <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div> */}
              <Link href="/"><img class="w-10 h-10 rounded-full" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN4AAADjCAMAAADdXVr2AAABI1BMVEX///9yWFj1YTL/ybBo4f3/vA4APGd2WVcJP2g4SWIoVXk/SmFq5f8AMF//zbIAOmYANWQANGD2+PqATlH9Yi8ZTHLlXzUkQmPxYTFEZIPd5Ot1i6E1XH6VUU0qdJdJqMZWc47P2eHqvqu+y9W2V0N9TVWgkJGsl5Rh1vMALl8fX4TvtRNlbH5og5w3U1p2d4SVgUMygaRnVVrq7/NcUlweS25VwN5pVlnet6bRr6JaZ3ynt8VJTV/Ez9nV3eQbQmacrr28optFXHaBmKxde5U4jK1BnLxUUF2SiI2ikpJ1d4RRuNYAJ1qhssEYVn0ANms7VXMAHlZTSFvMWzyiVEljSVmYhjyOfUferBtJW1crTV7IoCdQX1UaR2HjrhumjDnCWUDVnzREAAAWEUlEQVR4nN2dCVszuZGAzcDK8qGW5EzHa+yAjwTcDIQBG4Mx0AabD8MHH56dZDbHbib//1ek1If7cN900wz1PMnMGNHotUqlqlJJXSjkLLWbl2a7VS6XG0ez3nbevUlZro9khVOKhFBOiHzUq+Xdp9TkuqEAGVbrJZB6XcWIUoJnn2MMa0eEYlx6ON0o6rJx+lDCCHEyv8m7b2+XjswxrpwXN2wCiEMgpMr8tz6CPYZQ3QlnIJ5WMKZs9puegz2C8JUHnAZ4DiNI5F7efUwuNxzhBx86bQTrCCnN3+oA1mQaRCcAHzDmcifvjiaTI478NNPSUBhAMsu7p0mko+B6CJ0AvIIZ2B7k3dn40qL4PJROzEAVUXydd2/jSk8JVU1TSmBhghS0N3m3XkeWBsXR4HQLE6Cgk+fnDze42wRVIg6erqAc+yyBLwTT9rv2PYJMOT6NSmcoKPHyYQZH4Bpg8tHctwaNYDZdCspltxIOppRj9QGTaR4M/jKgkQ2LyactgW37MHWamCBUOi/WP5p2XitoGItuQ18CKWn3hI0Z3EyOZMLBIR8W4QcIfyzXbcoiLXruARRxEkHlVhkrRMTApaGmAqdY+VjBYZOrsek2tDhJRUhPW6ilBzOUOsfkYy19cS2LBbgxvCrVS1civLc+VNk0byKHtGgpGZ6A0XIWjk9U/nHc7tp251pGyfE8gD8M3s2sQQkh+FPi9RqEC4uHMbpKj25j40PMve22QhGuVx6GIGnSgeXMPycz4RTjymkxRa00ZIjyX/dmiuZApc4GU6+C5Ly9lpmC8TALOMCr03nOdBMFq6fZ0IFu5j31bhiKF9/FkGIpd4+6RbPSTOFQs5xXvWmc1ENMgcGj+SYKIXhNFCBEontAfJorXWHG4gevUeUUPKBWc5Lj5KthlDD8CRdhVzDiRM4v4JuQ7AZvY6jWS3WIcZ+neeE1aGYzb0MP/zYeVPyc0/gNlOzM5orxXM1r8ZuQzFZ0mwzzSnYehetmClFEsY7kXPDk8LxK6WrjzYAPiOQRFW2HJqTBuCP8ZsCcsoHXCg5ZFoYIMwCsvDEYVHkzB7wXEpKQLoLR279jFIlQPjldTlHfLCQhXbxCbCFJtxpgaZjYyhRLtJED3hGvB3brFNPl5uamJI0vARCpDwl1tFjJBS8k316sYzaWNjXAi2PEUNIhLFZQOQe84Hy7rpqbukhSd+9MG8Kr+Am1nEavHJiQPsXobNMmoKOHTAxhPQKho0FOc08O9DhVUzVtgN29pUaoVoZB/kxx40q1LTn54NVQwKoOCzrbc9IZs3ABhEJL61cCcf0BxeLpFYRBtmmdz8IQhAcTj16u02mAghAJQtDT0tXwfMMs1xWw58NKHWs/cuAdfSi84hDTs64XnUHYvX06g0GE9RBCclFsXalUtHprraicLZeOLEAuXgvg+cw9oEPownPwLMTNi9vjO5UxjdIQSmFqLhdj6dCx5uBcton8Agagw+w2kM4YRKl7cbt3fHi3xELk5eXxYtwVnzvxUC4utc/CoNHth9JZjJJk/y/tnw68U6TkUVrmXtb1bLUoUolM5wftwBvmE+85nTIIqitg+4Z1mENjyUM8Rs2viQNPWOE8ktVzanepiyoGQw9wbAkTal32HXQXj+stHldugBOvgnAOdK5US1EcogGjjhfSocLWhdxZ4yeNPRpAE9MeOfFKtJUHnrMACWLX5d3y8rErXRDsJWRsVz6vFitPwImn8hxWda18zIFHj/X544OnJMTLadkrTB3JCA1P79wT8dA85dCmnBfIUzvHXninOdWVTQjyxIOptb8ujnVe6nq02O96mhZYF8LOc9S20xLbQ68VdOqJ5232XUtbUAs7ngiLg9eF6xb31IX4whm1jv7cEPTgjfdWceBVaHDxR0+hPDWhZBVaDhwhQ2Z4YQXHMkX3u2nJAVVeVg+2hwxZ4YWFQx3Cd6vV6mhUrW6N+tVqf7RVTS5bMl99mS1HTG3iSZtdb9m0uc4+TboeLjUmLwF0hR7hQPZVUe6rB4T0+4TsVLcSS3XHwptT1QNvgam3oCfDNErjJfNuwsqagbXjDTEJjBd0vC+c71QxUkZfFSSnhDfjtnXdxLtkoqzTSzgr63S3vk0IVUSwYcMrPoQYTg1vayTLX6v3+GCrf4C/pITn2GTQ8aR9wts9b2lyI/F5RvHUu8kE7ETXiRfmUOujZ8yc1f8lFhtez747a+Adcn//d861pPwF8a8U6zAR59vxwgxnj6CDnfREtv7cjf1IBuA9Qccumb//OyWyGLxb9ux7MmhARShsn3tqSOEVfMcprnvcdiqrRqyFr1jBWD07O8MBOUlwUs+E4CA8pD0FY2PNCfU4OwS1GumJbfRqtrJ3Ec0KPxkF6NKM6550EB7CVDwFviv9yQ9ICT4E1iGhLmkcaVtzz0pHFDeGdYzu9hZ7d9w/Yd5kZwsh1D81tM3pE7RYmlu6wrIEl30AXpqJJjueEa8XhyUYOqzFewvm7yE22KGW/Quo5OgRdqElAkE9tUNS9bD9hQzx9ID2vCQyyxhrlnPMfIdmwNij8EqkO9sjXNLkZ/qyDjqKUP20GJqhzhCvB6ZTS2vi47F0xrRlXfadfDPOutLe80LaY37TBQznsbass8uLhQpT8Co0ls0QD+xcZQgW5ViklnU80E6fVW2bUdDNJ0a7m9hP42DlvzDwYJwXVBwvDclxZohXaMMcQUj3E43Rg75jLy+q1qIweNIFg2YwfJ6L2YuiP0PDE76pijAKKSjLEq+n4NUGuoEnjSn1uA1iACG14U7irnRJiceUmhKt1mCFBw4OfHkp4kXIBjvwYGkAc7Fpx9uUHhllM+eTalNEyUKnZ2xP6i4Zabh6ddMmgtyOJ7zvsDNScfDmeBaWznfjLc38kYkHfUKM0PZ0YjrK0zkm1Nysle5oGSI/CCyUcnPVZDJrQZM7M2Iy8YQPG3IOJQZeDSEeVvzqwNtWVrslFh7o1CFj3BEKKXerJN++lvCT9mXCnW3wnhnw2vACFprYeOCehloqB96EUHMTFvCerEzZxeIOm5uSCIsdSStRgXUTu3l7eLZqQ1WR315F83dslRU9C7n2JAbenOLQChkHnhEDuLtk7E1aWQh7GhCMy9Ko5rHlLZxN7lZfFfxr8LoeHQ90M/zchwvvTLK65F0s4BYwPch3332lCQsLL7gsIjqeMPOh5+VceKo1KPwuBE/SxhGsoRK88b4pyRbeMrXROwLdDN1rcq57hJk9BXflzL/DWosxxHJLEcwpF8Etu3S1Nx/kf8fDE7oZfhLXgTcg1tf8yHCwzoG/ybQMGQnRYrE2js1FhoXoUyBer2UFi5bdnDX913fnujfnJpM0JiRE5zb3F0+Xd5fH+8GttFSa+dRl2N5lAN6krNguRDnipt2cPbMjv+/MiddRqGnjuisHxr/fnrsp682OmWwM3oIpCSOGwRQrYClXeDW80s0Zx5y0vb8UJ16huVJPMAKHkUxnqKyeBC6Af2gYiLc9Q9omqoV3bdlNwIPoVGl5fXEuvBq4yseatwHfuZoOnqEHIvT3jj7C8G6OGEf6jvcKr7nSTfGvQpAiT9ccPheexnd2u6kZfBY2+SKJdKtnJMZ3jMuhlwmt4123FWNvmyqy+e3YdLMwVQx4GGGX77+GV6jNFcrKi3H3wlZ++ya8Q1rujhdLcLob4SGMG6/XWsGRhhVYa3bTjNMGoLomIG86vsE1PPhVWeFg8lWMlvHwvFt3sZZT5ESehsK58GrTsgnHFYfxEHbTdlZnMJUVZDQkc1tDDzwAnGMFvH7kLsDV5cLTWIqiQK/WYE8QIQptRDt46cBrGX1GnDtNv103jU8mq2+C/mSNsieeuMJ48vIir1YJe3cvGUQMm7YFQVscurdPWPGqPRNL3WTSiXqozYFXNgzK2pTqgN18ducQeg0D0Lb4+OBpMvMyLuBAUsbUy8XtuKvpY/divH98R8GBefaYq+AeKHHO4nvhrRvEmVM3Tdlua3wkGt6AcI8N6O4jsDAjt36mqlqaXRAf33rp5h2PdWrBAw811lY02dPf3J7JOAYerCio6zEgUnf/aWmr1CFMvtT01YNuzOJV6TjwZOq9onXsdnP14ZzoC6D9+Gog3oD5VoiDTt4+7i0Wi73H/bErwrXLksY7jOjAm3HiuaI113VzNfGE/2KZoUA8CAD9y4x9S3jsbfZYrJnnXvcGM2wCcpvf7NZNm9l0eZ/BeKAeIVFfoEhdFOpkBuJBz1/We+6ym7Domd8BY85VPQyvp7zFsZbACMW809HD5+w1iKl3z5qGCh/alk+cPZsajNwLSBheYUaSV1KDVx4W/0TBE26nYTX0L0vopi2loUUM3h51KF6hRZGn7xKBDuKf2JWpPvHedpMLv1nD0+ymrZHA84mHwvG2EcWJIgcRpJdjn8D3jdY1K6Phabpp+8mMU8Unmg3HK1wTeuax+oXSjVF4dBcDTzjY8k8Cr+zUzULz2TcXEQGvMFES8EljTGmC8wrBmbLJQNSngFdpbxP0Wo8IeIIvrn5Kt4jyJCUO4YlAl90Mlih4Yu8BhZ8istM9goedqIAjHE/mOPoRskh4hR6l5NgnXPWA23yKknfwlHC8SZv/FHkLMBpe4abM2F00BZWk8RknjYS3lkTJUm97LHA+EhGvUDtSKIsygFL3kNHAu9MDJcu99UCZgFerPoYASt0F+Ibl5D3MDa8waBLK5L2ub4QgCTjG6fQN/ckPD/52Q2wqH956hHdauuWSMohb3nQxep54WkhMGJMP9y9cRzLGe5cwcIQ233jre754IqFRFoRUvXvae7wF2X9cHC6xVlzQmr754GHeeKILswb477ZkC4X/QO1pGtf1fwA8IVOOl6p2hBGrZ0tE07p4M1e8wfVk1py32+15A9GuqIS4EJUStzB2QubN2aTzNv3MDW8wOZIpIebhI6yneLX/3TJs1mYTgsrNXnLEfPBqk4ZBJh8c7JycnBwgK4MtRk98trNzoGMS2k56lWMeeDdNLNi+neyOxNEOIV+5A4/29YMVW/3R7o4sCOW1tE4kuXl3vO25Av09+NLX+m+cXnHjjVY/EUe3vnwjoKYBFQu+UkuQn/GXDg2rDRnMxEy771cdR3mqI2Ltjkn7MHrOsztboxNOwT2Lr6IzhcuttITTkKOeLxSWOIBzHz7qI2t7Rbqk39wNqtXRDqdJXlw3f/Y7cJVAeODfr7UVSk7W4cTZKsr0ukAJQnPudUyr2t8hSV5cdz1rpiXBXlQHjMS3kfcBsz5FdO8CFoaLY0ZlzyZb1V1MSeujvvdsQii53/I5PgfGhTJRWg7ai73G1xxAij7cq7E0mSqUfvU/G1gdHXCkHdfy1F6z1ReOYm4SvY8AnRzQb2E9+t/owe5Xl1FdG2WUz/U6wQJ03wLpRNcP+Ekgm9ZohD/e+E0i0Ol4IW3EBMQoUUo3O+mQEM2MgQfjB3HTR7Kf4mWlPgtCAjzNyuZxL6CftDkJsJmx8YT9/EDvNZ0o/D7SqETFE05OLtd3ecmA0oNogxIZb6uPaR6XjnrJEecRJl48vOou+SCvTrwhXqrphREDT6hnzi/TMKQNPqSrb30suz8KxhvxA3fbEf8QLwDrKGvhDQSvnurqi1fd5dT9fVQh/vsAw3fE8VpvR96zMQgPrQ33iH+A2Tdg6zMvHTyYffnc5W+XKVlTq7TwvvL8174WX1/z0sHb2pLzuT/PJtuM72aFV73neb8ly0s3U8Mb8bwDvwb3uFkqLeUE7czjVQyWDGw5PVtO+m14qwdVT3i+tnNCuNGtav/+QF4JxrKXYJ/PnT/Y2TVcOrCdqV42E1vm3Mg3V3cRt19KhnwuK/O5xMz5C8TMa/RRrmFfDRtrOjj4CP3P7/4QJuEtoE0JUcOLBccsl5tjDekRos+xPkXqz9+nJX9BRgApwqI0duATSpPLpg3AP3//XVry/R+Qkdzo0+ArArMV2bCEVYz+lB4dSN188EHCUoU0pKOsvmT0xzTxvv+rqZ1feMiOW4YyMwPZ1PH+ZGZvRgFX7mUtZdNlyQ4vR7facqezw8vRrZ6uXJYM8Ubplj7EkMYq1MtQObciXGSRiQzIyp3OEA8cl3zcanCnzeqULPF2eS6vm7Dc6WyVs59PwmzlTmeMB9qZZDOs5nNFr12CtKKnkNG74O0mclxmPxElTIKWHNOdzhpPuNUJSgmOPN/54BAUtAUs2xILmeJVvyVxq4/Yn38Ill9eAy4gXLnT2ePdcxrfcQG8/wqWX1/xdDr1ub9hZiR/sokYDDw9qTSKd89CVLxfXrF2jZ9nJWlLd6f7u+IK/UzwgK0/SuxWh+P9yDAuy4xQztZCZsOdFtfoo4P7XZQ+3uh+B5Nn4ReJfGBs7YyCx24KtcGkIeoQXb9tuNPVE71iGqeNh5D2XEUsrdWvRImdD4yEp+dxXihyH0FrG+50dbR7coAzwMOgFSe7xsqawK2OgVfoMOyc3TZ3WiuGTl85v436q3Q1OC6xyyTi4BV6xFmHYXOnM18YdLc6bj4wFl5hTh3DN+eOl1ZkjJfErY6Hd6PYX7Bpd6ffA696ENutjodXKNsvdLlWnDVkmePFzwfGxGtTbv2BpqsaIms8oZ0x3eqYeHM7nuzatMwcD9zqmO/WfcPo3Shk953x7nnY/eJvw5NtRSYzdw1R9nix3eo3WM61Yo/M8eJvsydf9wbIXUWWPV7sjcxYeBNiu5D7hvCv7473JWYyPp7PaT9a0FHcdQ/vgLdLMsObOiMGiPXef/TibqXEi/fsq47bJXsXvLhuWaRoHZUxEdH61PGrbeoq4cweL7ZTHQHvFYtUi4Jnrmjk+tk1fNmvezt2pymKzNg/QvB+ecXT2WzqkSlrc2cdYOYu9X3siGhK1BC8/2V+MfIAU1j6qu+EV92657EDop7y+rdgvL8z32duU8oPdkd94618GSUCq3oy8IvMeStuqmzAXn8NpPsBBSjEdkvhnCIrX//H7/47PRGppNWTRcJsHj9N3Q6ZfD++Br4cbtpQ9MPQGIm+qPU0RbzvDkT/A6ydpPbjWnn9JYDuXzgsxNruTV5eJlOMrde6pCniDt8X+APXCet22pz90x/vzzRidgqj0u+ykLfWDID9w358P/wfU6bRHnNE1e9SKwa05Oc3n6C9ZpT96En3z38wEnXb4lpBf/0+1YI5YTt/X/e6KNtbat5SuJbR6///+DfXvt6/fv37K0VNn19af8qcosq/f5+u/EVFfOLTbyfapN3wLmCW5bIsrvd9Zci+J8teX8XGbcvvl9afotmW0L3eOKI9ruzz9xq2y2uuMdFKlePbrbzFrwei2BobhVgTBSG1VPlUUlIR0q9AvgG9eyh+Ntl4gCklilIaFA+tt4Z/GikOtfdndhTrvcWfSopXSOmIauDz8La/RTkXPk3bevX1JxPtTeVl66XTn0yKJVS2Xjr96UQbvU8+924UVPmUw1esIPHCss+97hW2OXgtG3l7GWmL8Fq4Fmv3iPA5P5moaLUd15GVJAHDRxZKFdtbs3vNdvlTSbupD91/AHhRV8DplYWPAAAAAElFTkSuQmCC" alt="#"></img></Link>
              <span className="ml-2 text-xl font-semibold text-gray-800">
                TB developers
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base text-gray-600 hover:text-gray-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/contacts"
              className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Contact us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/contacts"
            className="block px-3 py-2 text-base font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-md mt-2"
          >
            Contact us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Hader;